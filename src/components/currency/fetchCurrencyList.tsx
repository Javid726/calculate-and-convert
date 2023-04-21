const fetchCurrencyList = async () => {
  const myHeaders = new Headers();
  myHeaders.append("apikey", "jm0X9pSL142HDGpwEOfMDNngokuuXefW");

  let requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const res = await fetch(
    "https://api.apilayer.com/currency_data/list",
    requestOptions
  );

  if (!res.ok) {
    throw new Error("/currency_data/list is not okay");
  }

  const data = await res.json();
  console.log(data);

  return data;
};

export default fetchCurrencyList;
