import { QueryFunctionContext } from '@tanstack/react-query';

const fetchCurrency = async ({
  queryKey,
}: QueryFunctionContext<
  [string, { to: string; from: string; currency: number }]
>) => {
  const { to, from, currency } = queryKey[1];
  // const to = queryKey[1];
  // const from = queryKey[2];
  // const currency = queryKey[3];

  const myHeaders = new Headers();
  myHeaders.append('apikey', 'jm0X9pSL142HDGpwEOfMDNngokuuXefW');

  let requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };

  const res = await fetch(
    `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${currency}`,
    requestOptions,
  );

  if (!res.ok) {
    throw new Error(`/convert?${to}/${from} is not okay`);
  }

  const data = await res.json();

  return data;
};

export default fetchCurrency;
