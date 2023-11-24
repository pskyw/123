let body = $response.body;

// 猫眼演唱会
if ($request.url.includes('https://m.piaoxingqiu.com/cyy_gatewayapi/show/pub/v5/show')) {
  body = body.replace(/"canBuyCount":\s*0/g, '"canBuyCount":100');
}


$done({ body });
