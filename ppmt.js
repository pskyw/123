let body = $response.body;

// 泡泡玛特
if ($request.url.includes('https://res.paquapp.com/popmartvip/goods_config/goods_detail_config_5.json')) {
  body = body.replace('"sale_msg"', '"sale_msgg"');
}

// 
if ($request.url.includes('https://res.paquapp.com/popmartvip/goods_config/goods_detail_config_5.json')) {
  body = body.replace('"buy_now"', '"sale_msg"');
}

$done({ body });
