import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  // Validar que sea POST
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método no permitido' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const data = await request.json();

    // Validar campos requeridos
    const { nombre, email, telefono, experiencia } = data;
    
    if (!nombre || !email || !telefono || !experiencia) {
      return new Response(JSON.stringify({ 
        error: 'Faltan campos requeridos',
        required: ['nombre', 'email', 'telefono', 'experiencia']
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Email inválido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // TODO: Aquí iría la lógica para guardar los datos:
    // - Enviar email de notificación
    // - Guardar en base de datos
    // - Enviar confirmación al usuario
    
    console.log('Postulación recibida:', {
      nombre,
      email,
      telefono,
      perfil: data.perfil,
      experiencia,
      cv: data.cv,
      fecha: new Date().toISOString()
    });

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Postulación recibida. Nos contactaremos pronto.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error en formulario:', error);
    return new Response(JSON.stringify({ 
      error: 'Error al procesar la postulación',
      details: error instanceof Error ? error.message : 'Error desconocido'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
