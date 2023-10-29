let body = $response.body;

// 北京银行周四周五
if ($request.url.includes('https://yxmobibank.bankofbeijing.com.cn/')) {
  body = body.replace(/"rightTotal":\s*"\d+"/g, '"rightTotal":"3000"');
}

// 
if ($request.url.includes('https://yxmobibank.bankofbeijing.com.cn/')) {
  body = body.replace(/"inParticipateTime":\s*"\d"/g, '"inParticipateTime":"1"');
}

$done({ body });
