# Queryer | [Demo]
### Query the data from multipledata source with Predefined or custom queries



##### Predefined Query list for each data source

Seclect a data source (Orders or Products), by default you have few predefined queries for both.
| Data source | Predefined Query |
| ------ | ------ |
| Orders | orderID=10248 |
| Orders | price between 20 to 50 |
| Orders | price more than 100 |
| Products | category 5 |
| Products | stock less than 45 |

##### How to use custom query
- Switch to Custom Query
- Select Data Set (source of data where the query will be fired)
- It only supports single equal condition for below listed keys(ex:orderID=10428)
- Orders supported keys: orderID, productID, quantity, unitPrice, discount
- Products supported keys: productName, categoryID, discontinued, productID, unitsInStock

| Example | Query |
| ------ | ------ |
| Orders | orderID=10248 |
| Orders | productID=51 |
| Orders | unitPrice=41 |
| Products | categoryID=6 |
| Products | productName=Chai |
## Note

Im assuming it to be a reatime data query app, so every query mimics api call to server(loads static json file here).
if no query selected it shows all entries from selected source.


[demo]: <https://imsarang.com/queryer/>
