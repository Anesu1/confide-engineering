

export function sendEmail(
  data,
  setLoading,
  setIsSuccess,
  setMessage
) {
  const apiEndpoint = "/api/email";

  setLoading(true);
  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      setLoading(false);
      setIsSuccess(true);
      setMessage(response.message);
    })
    .catch((err) => {
      setLoading(false);
      setMessage(err);
    });
}
