function getTotalAmount(priceObject, noofPerson)
{
	var totalAmount =0;
		priceObject.sort();
		
		for(var count= noofPerson-1; count>1 ; count -=2)
		{
			if(count==2)
            {
				totalAmount += priceObject[2] + priceObject[0];
			}
			else
			{
                    
				var first = priceObject[count] + priceObject[0] + 2 * priceObject[1]; 
				var second = priceObject[count] + priceObject[count - 1] + 2 * priceObject[0];
				totalAmount += Math.min(first,second);
               
			}
			
		}
		if(noofPerson==1)
		{

			totalAmount += priceObject[0]
		}
		else
		{

			totalAmount += priceObject[1]
		}
console.log("Total "+totalAmount)
	return totalAmount;
	
}


var priceObject1 = [300,400,600,700]
getTotalAmount(priceObject1, priceObject1.length)

var priceObject2 = [1321,2450]
getTotalAmount(priceObject2, priceObject2.length)

var priceObject3 = [500,123,873]
getTotalAmount(priceObject3, priceObject3.length)

var priceObject4 = [600,800,150,700]
getTotalAmount(priceObject4, priceObject4.length)