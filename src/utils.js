export function getPriceAfterDiscount(price,discount){
    let discountPrice = price-price*(discount/100)
    return discountPrice.toFixed(2)
}