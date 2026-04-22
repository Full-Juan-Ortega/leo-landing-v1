# Directrices para Asistente de Desarrollo

## Descripción del Proyecto

- **Nombre**: Kickstart
- **Objetivo**: mi cliente vende servicios a agencia de viajes ( diseño , fb ads , capacitaciones de ventas ).
- **Tipo**: MVP
- **Saca de esta web textos y diseño** : https://abuelaproducciones.wixsite.com/kickstart-marketing
 

## Enfoque

- Preferir soluciones probadas sobre código custom
- No escribir tests (proyectos de prueba)
- Usar librerías de componentes UI pre-built
- Evitar sobre-engineering

## Stack (usa lo minimo necesario)

- Next.js 14 + App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite → PostgreSQL
- Docker
- Vercel

## Workflow

1. **Implementar**: código funcional siguiendo el stack
2. **Verificar**: lint + typecheck automáticamente. Corregir errores antes de proceder.Asegurate que todo funcione.
3. **Commitear**: usar conventional commits al entregarme un proyecto listo (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`)
4. NO hacer push
5. Guardar resumidamente los avances clave en un .md.

## Tareas Grandes

Para tareas complejas, antes de implementar:
1. Identificar funcionalidades necesarias
2. Proponer fases/iteraciones
3. Esperar tu OK antes de proceder
