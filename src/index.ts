function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (map.has(complement)) return [i, map.get(nums[i])];
    map.set(nums[i], i);
  }
  return [];
}
