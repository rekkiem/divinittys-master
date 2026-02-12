# ✅ CHECKLIST DE INSTALACIÓN - Divinittys

## REQUISITOS DEL SISTEMA
- [ ] Node.js 18+ instalado → `node -v` debe dar v18+
- [ ] npm o yarn instalado → `npm -v` debe dar resultados
- [ ] PostgreSQL OR Docker instalado

## INSTALACIÓN MÍNIMA (10 minutos)

### Paso 1: Dependencias
```bash
npm install
```
**Status:** ⏳ Esperando...

### Paso 2: Variables de Entorno
```bash
cp .env.example .env
```

**Editar `.env` con mínimo esto:**
```env
DATABASE_URL="postgresql://basictech:basictech123@localhost:5490/basictech_shop"
NEXTAUTH_SECRET="dev-secret-aqui-cambiar"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Paso 3: Base de Datos

**OPCIÓN A - Docker (RECOMENDADO - 1 comando):**
```bash
docker-compose up -d
```
✅ Listo. PostgreSQL corre en `localhost:5490`

**OPCIÓN B - PostgreSQL Local:**
- Tener PostgreSQL corriendo en `localhost:5432`
- Crear BD: `CREATE DATABASE basictech_shop;`
- Ajustar `DATABASE_URL` en `.env`

### Paso 4: Migraciones
```bash
npx prisma migrate dev
```
- Pregunta: "Enter a name for the new migration: " → Escribir: `init`

### Paso 5: Cargar Datos
```bash
npm run db:seed
```
✅ Crea 7 categorías + 12 marcas + 20+ productos

### Paso 6: INICIAR
```bash
npm run dev
```
✅ Abre http://localhost:3000

---

## 🧪 PROBAR LA INSTALACIÓN

### Tienda (Sin login requerido)
- [ ] http://localhost:3000 → Ver productos
- [ ] Filtrar por categoría
- [ ] Buscar productos
- [ ] Agregar al carrito

### Autenticación
- [ ] Registrar nuevo usuario → http://localhost:3000/register
  ```
  Email: test@ejemplo.com
  Password: Test123!
  ```
- [ ] Login → http://localhost:3000/login (usar credenciales creadas)

### Login con Usuarios de Prueba
- [ ] **Admin:** `admin@basictech.com` / `admin123`
  → http://localhost:3000/admin
- [ ] **Customer:** `juan@email.com` / `admin123`
  → http://localhost:3000/profile

### Perfil Usuario
- [ ] http://localhost:3000/profile → Editar perfil
- [ ] Ver dirección creada

### Admin Panel
- [ ] http://localhost:3000/admin → Ver dashboard
- [ ] Ver lista de productos
- [ ] Ver lista de usuarios
- [ ] Ver órdenes

---

## 🔧 CONFIGURACIÓN OPCIONAL

### Pagos (Stripe) - Para que funcione checkout
```bash
# 1. Crear cuenta en https://stripe.com
# 2. Obtener claves en Dashboard → API Keys
# 3. Agregar a .env:
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."

# 4. Probar en checkout con tarjeta: 4242 4242 4242 4242
```

### Imágenes (Cloudinary) - Para subir imágenes en admin
```bash
# 1. Crear cuenta en https://cloudinary.com
# 2. Obtener credenciales en Settings → API Keys
# 3. Agregar a .env:
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
```

---

## ⚠️ PROBLEMAS COMUNES

| Error | Causa | Solución |
|-------|-------|----------|
| `ECONNREFUSED 127.0.0.1:5432` | PostgreSQL no corre | `docker-compose up -d` |
| `DATABASE_URL not provided` | Falta .env | Crear `.env` con `DATABASE_URL` |
| `NEXTAUTH_SECRET not provided` | Falta variable | Agregar `NEXTAUTH_SECRET` a `.env` |
| `No Prisma Client found` | Migraciones no ejecutadas | `npx prisma migrate dev` |
| Puerto 3000 en uso | Otro app usa puerto | `npm run dev -- -p 3001` |

## 🚀 COMANDOS ÚTILES

```bash
# Desarrollo
npm run dev              # Inicia servidor
npm run build            # Build de producción
npm run lint             # Verifica código

# Base de datos
npx prisma studio       # Interfaz visual
npx prisma migrate dev  # Crear migraciones
npm run db:seed         # Cargar datos

# Docker
docker-compose up -d    # Inicia PostgreSQL
docker-compose down     # Detiene PostgreSQL
docker ps               # Ver contenedores
```

## ✅ CHECKLIST FINAL

- [ ] npm install ejecutado sin errores
- [ ] .env creado con DATABASE_URL
- [ ] Docker corriendo O PostgreSQL local ok
- [ ] Migraciones ejecutadas (`npx prisma migrate dev`)
- [ ] Seed ejecutado (`npm run db:seed`)
- [ ] `npm run dev` ejecutándose sin errores
- [ ] http://localhost:3000 abre correctamente
- [ ] Puedes ver productos en la tienda
- [ ] Puedes loguearte con `admin@basictech.com / admin123`

**Si todo está ✅, el proyecto está listo para usar.**

---

## 📚 DOCUMENTACIÓN

- [SETUP.md](./SETUP.md) - Guía detallada
- [docs/PRD.md](./docs/PRD.md) - Requisitos del producto
- [docs/PLAN.md](./docs/PLAN.md) - Roadmap
- [docs/DATA-MODEL.md](./docs/DATA-MODEL.md) - Schema de BD
- [docs/PAGES.md](./docs/PAGES.md) - Rutas disponibles
