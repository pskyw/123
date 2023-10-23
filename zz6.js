let body = $response.body;

// 周周六点亮
if ($request.url.includes('cube.meituan.com/topcube/api/toc/playcenter/chainCoupon/preSendCoupon')) {
          body = body.replace(/"status":\s*\d/g, '"status": 0');
}

$done({ body });
