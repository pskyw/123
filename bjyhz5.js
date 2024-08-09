let body = $response.body;

// bjyh周五影票
if ($request.url.includes('https://msact-xshd-xt.bankofbeijing.com.cn:8088/ibbp-market-web-seckill/')) {
  body = body.replace(/"userTakeNum":\s*\d+/g, '"userTakeNum":10');
}
// 
if ($request.url.includes('https://msact-xshd-xt.bankofbeijing.com.cn:8088/ibbp-market-web-seckill/')) {
  body = body.replace(/"showStatus":\s*30/g, '"showStatus":20');
}

$done({ body });
