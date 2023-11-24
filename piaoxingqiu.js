let body = $response.body;

// 票星球
if ($request.url.includes('https://m.piaoxingqiu.com/cyy_gatewayapi/show/')) {
  body = body.replace(/"canBuyCount":\s*0/g, '"canBuyCount":100');
}

// 
if ($request.url.includes('https://m.piaoxingqiu.com/cyy_gatewayapi/show/')) {
  body = body.replace("PENDING", "LACK_OF_TICKET");
}

$done({ body });
