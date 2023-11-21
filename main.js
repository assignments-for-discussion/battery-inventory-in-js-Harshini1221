const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  return {
    healthy: 0,
    exchange: 0,
    failed: 0
  };
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
for (let i = 0; i < presentCapacities.length; i++) {
  let SoH = (presentCapacities[i] / 120) * 100;

  if (SoH > 80) {
    healthy;
  } else if (SoH <= 80 && SoH >= 62) {
    exchange;
  } else {
    failed;
  }
}
