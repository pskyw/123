let body = $response.body;

// 北京银行周三
if ($request.url.includes('https://h5api.xiaomyc.com/bob/')) {
          body = body.replace(/"saleState":\s*\d/g, '"saleState":1');
}

$done({ body });
