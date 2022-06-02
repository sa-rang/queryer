<template>
  <div>
    <h3>This is queryer</h3>
    <p>
      Seclect a data source (Orders or Products), by default you have few
      predefined queries for both.
    </p>
    <br />
    <p>
      Custom Query Switcher: Enables you to write your own query(only works for
      equal condition)
    </p>
    <p>How to use custom query</p>
    <ul>
      <li>Switch to Custom Query</li>
      <li>Select Data Set (source of data where the query will be fired)</li>
      <li>
        It only supports single equal condition for below listed keys(ex:
        orderID=10428)
      </li>
      <li>
        Orders supported keys: orderID, productID, quantity, unitPrice, discount
      </li>
      <li>
        Products supported keys: productName, categoryID, discontinued,
        productID, unitsInStock
      </li>
    </ul>
    <br />
    <p>Note</p>
    <ul>
      <li>
        Im assuming it to be a reatime data query app, so every query mimics api
        call to server(loads static json file here).
      </li>
      <li>if no query selected it shows all entries from selected source</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Info",
};
