const path = require('path');
const fs = require('fs-extra');

const tasks = [];

tasks.push(
  fs.copy(
    path.resolve(__dirname, '../packages/theme/src'),
    path.resolve(__dirname, '../dist/theme')
  )
)

Promise.all(tasks).then(res => {
  // logger.success(`copy 成功`);
})