const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  let healthy = 0,
  let exchange= 0,
  let failed = 0

for (let i = 0; i < presentCapacities.length; i++) {
    const ratedCapacity = 120;
    const presentcapacity =  presentCapacitie[i];
    const stateOfHealth = (presentcapacity / ratedCapacity) * 100;

    if (stateOfHealth > 80 && stateOfHealth <= 100) {
      healthy++;
    } else if (stateOfHealth > 62 && stateOfHealth <= 80) {
      exchange++;
    } else {
      failed++;
    }
  }
return {
    healthy: healthy,
    exchange: exchange,
    failed: failed
  };
}
function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  console.assert(result.healthy === 3, 'Incorrect count of healthy batteries');
  console.assert(result.exchange === 2, 'Incorrect count of exchange batteries');
  console.assert(result.failed === 1, 'Incorrect count of failed batteries');

  console.log('All tests passed!');
}

}

testBucketingByHealth();
