import type { Property } from '@/types'

const LEGAL_NOTICE = `En cumplimiento del Decreto 218/2005 del 11 de octubre, se informa al cliente que los gastos notariales, registrales, ITP, honorarios de intermediación, gastos financieros y otros gastos inherentes a la compraventa no están incluidos en el precio.

Contacto para visitas: 619 59 03 53. También por WhatsApp.`

/** Catálogo en archivo local. */
export const DEMO_PROPERTIES: Property[] = [
  {
    id: 'piso-turistico-cordoba-calahorra',
    title: 'Piso turístico en venta en Córdoba — Torre de la Calahorra',
    price: 0,
    location: 'Córdoba (Torre de la Calahorra)',
    type: 'piso',
    operation: 'venta',
    status: 'disponible',
    description: `Gran oportunidad en Córdoba.

Piso turístico en venta. Vivienda reformada ubicada en segunda planta sin ascensor.

Distribución de 75 m² con 2 dormitorios (originalmente 3), 1 baño completo, salón y cocina.

Ubicada a escasos metros de la Torre de la Calahorra. Piso con licencia turística y cartera de clientes. Inversión asegurada.

Más información: Sales Soluciones Inmobiliarias.

${LEGAL_NOTICE}`,
    images: JSON.stringify([
      '/images/sales-inmo-1.jpg',
      '/images/sales-inmo1-1.jpg',
      '/images/sales-inmo1-2.jpg',
      '/images/sales-inmo1-3.jpg',
    ]),
    fotocasaUrl: null,
    bedrooms: 2,
    bathrooms: 1,
    sqMeters: 75,
    availability: 'Sin restricciones',
    condition: 'Reformado',
    floor: '2ª planta interior',
    elevator: 'No',
    furnished: 'No',
    featured: true,
    createdAt: new Date('2026-06-22T12:00:00.000Z'),
    updatedAt: new Date('2026-06-22T12:00:00.000Z'),
  },
  {
    id: 'piso-fernan-nunez-73000',
    title: 'Piso en venta en Fernán Núñez',
    price: 73_000,
    location: 'Fernán Núñez, Córdoba',
    type: 'piso',
    operation: 'venta',
    status: 'disponible',
    description: `Ganga: piso por solo 73.000 € en Fernán Núñez.

Piso interior con 3 dormitorios, 2 baños completos, amplio salón y cocina amueblada.

Trastero amplio con zona de lavadora en azotea comunitaria. Piso muy luminoso y listo para entrar a vivir.

Más información y visitas: Sales Soluciones Inmobiliarias.

${LEGAL_NOTICE}`,
    images: JSON.stringify([
      '/images/inmo-sales2-1.jpg',
      '/images/inmo-sales2-2.jpg',
      '/images/inmo-sales2-3.jpg',
      '/images/inmo-sales2-4.jpg',
    ]),
    fotocasaUrl: null,
    bedrooms: 3,
    bathrooms: 2,
    sqMeters: null,
    availability: 'Sin restricciones',
    condition: 'Listo para entrar a vivir',
    floor: 'Interior',
    elevator: 'No',
    furnished: 'Cocina amueblada',
    featured: true,
    createdAt: new Date('2026-06-22T12:30:00.000Z'),
    updatedAt: new Date('2026-06-22T12:30:00.000Z'),
  },
  {
    id: 'casa-san-sebastian-ballesteros',
    title: 'Casa en venta en San Sebastián de los Ballesteros',
    price: 200_000,
    location: 'San Sebastián de los Ballesteros, Córdoba',
    type: 'casa',
    operation: 'venta',
    status: 'disponible',
    description: `Nos llega esta maravilla de casa en la localidad de San Sebastián de los Ballesteros.

Casa totalmente terminada y cómoda con 5 amplios dormitorios, fantástico salón y gran cocina comedor.

Piscina para el verano, amplia cochera, sótano y jardín delantero. Totalmente hipotecable. A 25 minutos de Córdoba capital.

Más información: Sales Soluciones Inmobiliarias — 619 59 03 53.

${LEGAL_NOTICE}`,
    images: JSON.stringify([
      '/images/inmo-sales3.jpg',
      '/images/inmo-sales3-1.jpg',
      '/images/inmo-sales3-2.jpg',
      '/images/inmo-sales3-3.jpg',
      '/images/inmo-sales3-4.jpg',
    ]),
    fotocasaUrl: null,
    bedrooms: 5,
    bathrooms: null,
    sqMeters: null,
    availability: 'Sin restricciones',
    condition: 'Totalmente terminada',
    garage: 'Amplia cochera',
    furnished: 'No',
    featured: true,
    createdAt: new Date('2026-06-22T13:00:00.000Z'),
    updatedAt: new Date('2026-06-22T13:00:00.000Z'),
  },
]
