let body = $response.body;

// 银河
if ($request.url.includes('https://rest-sig.imaitix.com')) {
  body = body.replace(/"countDownState":\s*1/g, '"countDownState":2');
}
// 
if ($request.url.includes('https://rest-sig.imaitix.com')) {
  body = body.replace(/"code":\s*"15180006"/g, '"code":"200"');
}

$done({ body });
