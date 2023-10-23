let body = $response.body;

// 邮储周六
if ($request.url.includes('https://psbc.huajifen.com/gateway/merchant/product/')) {
          body = body.replace(/"productStock":\s*0/g, '"productStock": 100');
}

// 
if ($request.url.includes('https://psbc.huajifen.com/gateway/merchant/product/')) {
          body = body.replace(/"currentTime":\s*"(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2}):(\d{2})"/g, '"currentTime":"2023/10/21 09:30:00"');
}
$done({ body });
