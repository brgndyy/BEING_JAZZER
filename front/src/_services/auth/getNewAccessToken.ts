export const getNewAccessToken = async (refreshToken: string) => {
  const res = await fetch('http://localhost:3002/api/users/newaccesstoken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
    credentials: 'include',
  });

  if (!res.ok) {
    console.log('새로운 엑세스 토큰을 받아오지 못했습니다.');
    throw new Error();
  }

  const data = await res.json();

  // access token을 브라우저에 쿠키로 저장해서 모든 페이지에서 사용할수 있도록 함
  // cookieStore.set("accessToken", newAccessToken, { path: "/" });

  // console.log("액세스 토큰 만료 됐을때 data", data.newAccessToken);

  // console.log("data : ", data);
  return data;
};
