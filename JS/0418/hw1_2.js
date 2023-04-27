// 1번
const nums = [1,2,3,4,5,6,7,8]

// const는 재할당, 재선언할 수 없는 변수이므로 i를 0으로 선언한 이후 i++로 i를 재할당하면 오류가 발생한다. 따라서 const가 아닌 let으로 수정한다.
for (let i = 0; i < nums.length; i++) {
  console.log('nums[' + i + ']: ' + nums[i])
}

