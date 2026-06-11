import type { IReview } from '@/models/review.model';

import type { IReviewService } from './review.service';

export class BodasNetReviewService implements IReviewService {
  // eslint-disable-next-line class-methods-use-this
  async getReviews(): Promise<IReview[]> {
    // In a real application, this could fetch from an API endpoint or scraping function.
    // Following SRP and DIP, how this data is retrieved is abstracted from the presentation layer.
    return [
      {
        id: 'bn-rev-1',
        author: 'Amanda',
        rating: 5,
        date: '8 de Junio de 2026',
        title: 'Super recomendable',
        comment:
          'Lo contratamos para nuestro gran día y la verdad que nos encantó, todos los invitados participaron y las fotos cuando las ves son únicas. Desde aquí le agradezco su gran trabajo. Un saludo José Carlos & Amanda',
        source: 'bodas.net',
        sourceUrl:
          'https://www.bodas.net/animacion/coto-photo--e232894#:~:text=Leer-,m%C3%A1s,-Carolina',
      },
      {
        id: 'bn-rev-2',
        author: 'Eva M.',
        rating: 5,
        date: '15 de Diciembre de 2024',
        title: 'Genial! Gran profesional!',
        comment:
          'Nosotros nos casamos en septiembre y decidimos que los invitados se llevaran una foto de recuerdo en la copa de bienvenida. Y la verdad que genial! Un gran servicio, con Antonio todo muy fácil. Me alegro mucho de haberlo encontrado, todo un acierto ☺️',
        source: 'bodas.net',
        sourceUrl:
          'https://www.bodas.net/animacion/coto-photo--e232894#:~:text=Leer-,m%C3%A1s,-%2B3',
      },
      {
        id: 'bn-rev-3',
        author: 'Ana',
        rating: 5,
        date: '19 de Octubre de 2025',
        title: 'Un profesional',
        comment:
          'Gran trabajo, sin duda lo volvería a contratar mil veces más. Muy profesional y dispuesto a cualquier petición que le hacía. Gracias por hacer de ese día momentos inolvidables 🥰',
        source: 'bodas.net',
        sourceUrl:
          'https://www.bodas.net/animacion/coto-photo--e232894#:~:text=d%C3%ADa%20momentos%20inolvidables%20%F0%9F%A5%B0-,Leer%20m%C3%A1s,-A',
      },
      {
        id: 'bn-rev-4',
        author: 'Álvaro',
        rating: 5,
        date: '29 de Noviembre de 2025',
        title: 'Grandes profesionales!!',
        comment:
          'Te lo hacen todo muy sencillo. Respuesta rápida, siempre pendiente de las necesidades del cliente. Desde el primer minuto muy contento con ellos. Recomendable 100%!!',
        source: 'bodas.net',
        sourceUrl:
          'https://www.bodas.net/animacion/coto-photo--e232894#:~:text=Leer-,m%C3%A1s,-Maria',
      },
    ];
  }
}
