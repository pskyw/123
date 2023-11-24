let body = $response.body;

// 猫眼演唱会
if ($request.url.includes('https://yanchu.maoyan.com/myshow/ajax/v2/')) {
  body = body.replace(/"showStatus":\s*\d/g, '"showStatus":0');
}

// 
if ($request.url.includes('https://yanchu.maoyan.com')) {
  body = body.replace(/"code":\s*1500/g, '"code":200');
}

$done({ body });
