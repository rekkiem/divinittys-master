import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

// SE ELIMINÓ: export const runtime = "nodejs" 
// Next.js ya asume que este archivo corre en Node.js; definirlo causa el error de build.

// Rutas que requieren autenticación
const protectedRoutes = ["/profile", "/checkout"]

// Rutas solo para administradores
const adminRoutes = ["/admin"]

// Rutas solo para invitados (no logueados)
const guestRoutes = ["/login", "/register"]

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const isAdmin = req.auth?.user?.role === "ADMIN"

  // Verificar si la ruta actual es protegida
  const isProtectedRoute = protectedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  )

  // Verificar si la ruta actual es de admin
  const isAdminRoute = adminRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  )

  // Verificar si la ruta actual es de invitado
  const isGuestRoute = guestRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  )

  // Redirigir al login si accede a ruta protegida sin sesión
  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL("/login", nextUrl)
    loginUrl.searchParams.set("callbackUrl", nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Redirigir al home si accede a ruta admin sin rol de ADMIN
  if (isAdminRoute && !isAdmin) {
    return NextResponse.redirect(new URL("/", nextUrl))
  }

  // Redirigir al home si accede a rutas de invitados ya estando logueado
  if (isGuestRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    // Coincidir con todas las rutas excepto archivos estáticos y rutas API
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}