async function getIp() {
  const resp = await fetch("https://api.ipify.org?format=json");
  //    console.log(response);
  return (await resp.json()).ip;
}
async function getInfo() {
  const ip = await getIp();
  return await (await fetch(`https://ipwhois.app/json/${ip}`)).json();
  // console.log(await resp.json());
}

export default getInfo;
