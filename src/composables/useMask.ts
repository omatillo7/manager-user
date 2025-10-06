export const useMask = () => {
  const formatPhone = (value: string): string => {
    const digits = value.replace(/\D/g, '')
    if (!digits) return ''
    
    let result = '+998'
    if (digits.length > 3) result += ` (${digits.slice(3, 5)}`
    if (digits.length > 5) result += `) ${digits.slice(5, 8)}`
    if (digits.length > 8) result += `-${digits.slice(8, 10)}`
    if (digits.length > 10) result += `-${digits.slice(10, 12)}`
    
    return result
  }

  return { formatPhone }
}