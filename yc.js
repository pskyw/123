let body = $response.body;

// 邮储节日节气活动
if ($request.url.includes('https://m.ujia007.com/ujia_mall/api/product/getProduct')) {
  body = body.replace(/"status":\s*"\d"/g, '"status": "1"');
}

// 
if ($request.url.includes('https://m.ujia007.com/ujia_mall/api/product/getProduct')) {
  body = body.replace(/"stock":\s*\d+/g, '"stock": 1');
}

$done({ body });
