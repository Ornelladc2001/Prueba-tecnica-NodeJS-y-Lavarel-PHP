 const enviarFormulario = async ({ name, email, message }) => {
  const response = await fetch(`${import.meta.env.VITE_FRONTEND}/contacto`, {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export default enviarFormulario ;