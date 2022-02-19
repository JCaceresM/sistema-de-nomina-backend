/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { evaluate } from "mathjs"
const scaleOne = 34685.0
const scaleTwo = 52027.41
const scaleTree = 72260.25
export const ISR = (value: number): number => {
  const retentionSFS = SFS(value)
  const retentionAFP = AFP(value)
  const salaryAfterRetentionNSS = evaluate(
    `(${value} - ${retentionSFS}) - ${retentionAFP} `
  )
  return (
    levelOne(salaryAfterRetentionNSS) +
    levelTwo(salaryAfterRetentionNSS) +
    levelTree(salaryAfterRetentionNSS)
  )
}
const levelOne = (value: number): number => {
  if (value < scaleOne) {
    return 0
  }
  return evaluate(`(${value}- ${scaleOne} ) * 0.15`)
}
const levelTwo = (value: number): number => {
  if (value > scaleTwo) {
    return evaluate(`(${value}- ${scaleTwo} ) *(20/100)`)
  }
  return 0
}
const levelTree = (value: number): number => {
  if (value > scaleTree) {
    return evaluate(`(${value}- ${scaleTree} ) * 0.25`)
  }
  return 0
}
export const SFS = (value: number): number => {
  const res = evaluate(`(${value} * 0.0304)`)
  return res > 4742.4 ? 4742.4 : res
}
export const AFP = (value: number): number => {
  const res = evaluate(`(${value} * 0.0287)`)
  return res > 8954.4 ? 8954.4 : res
}

export const totalDiscount = (employee: any, payrollNews: any) => {
  const retentionSFS = SFS(employee.salary)
  const retentionAFP = AFP(employee.salary)
  const retentionISR = ISR(employee.salary)
  const discountsMixed = [...employee.payroll_news, ...payrollNews]
    .filter((e) => e.operation === "RESTA")
    .reduce((acc, news) => acc + news.amount, 0)
  return evaluate(
    `${discountsMixed} + ${retentionSFS}+ ${retentionAFP} +${retentionISR}`
  )
}
export const othersIncome = (employee: any, payrollNews: any) => {
  return [...employee.payroll_news, ...payrollNews]
    .filter((e) => e.operation === "SUMA")
    .reduce((acc, news) => acc + news.amount, 0)
}
export const netEarnings = (employee: any, payrollNews: any) => {
  return evaluate(`(${othersIncome(employee, payrollNews)} + ${employee.salary}) - ${totalDiscount(employee, payrollNews)}`)
}
