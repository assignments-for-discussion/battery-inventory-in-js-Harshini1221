function classifyBatteries(capacities) {
  let healthyCount = 0;
  let exchangeCount = 0;
  let failedCount = 0;

  for (let i = 0; i < capacities.length; i++) {
    const ratedCapacity = 120;
    const presentCapacity = capacities[i];
    const stateOfHealth = (presentCapacity / ratedCapacity) * 100;

    if (stateOfHealth > 80 && stateOfHealth <= 100) {
      healthyCount++;
    } else if (stateOfHealth > 62 && stateOfHealth <= 80) {
      exchangeCount++;
    } else {
      failedCount++;
    }
  }

  return {
    healthy: healthyCount,
    exchange: exchangeCount,
    failed: failedCount
  };
}

function testClassifyBatteries() {
  const capacities = [105, 90, 115, 75, 40, 100];
  const result = classifyBatteries(capacities);

  // Expected counts: healthy = 3, exchange = 2, failed = 1
  console.assert(result.healthy === 3, 'Incorrect count of healthy batteries');
  console.assert(result.exchange === 2, 'Incorrect count of exchange batteries');
  console.assert(result.failed === 1, 'Incorrect count of failed batteries');

  console.log('All tests passed!');
}

testClassifyBatteries();
