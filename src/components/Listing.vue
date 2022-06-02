<template>
  <div v-if="listData" class="listing-container">
    <el-table :data="pagedTableData" style="width: 100%">
      <el-table-column
        v-for="(each, index) in columnData"
        :key="index"
        :prop="each"
        :label="each"
        width="180"
      ></el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      background
      :total="listData.length"
      @current-change="setPage"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Listing",
  props: {
    listData: {
      type: Array,
      default: null,
    },
    listDataSet: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      page: 1,
      pageSize: 10,
    };
  },
  computed: {
    columnData() {
      let colsOrder = [
        "orderID",
        "productID",
        "quantity",
        "unitPrice",
        "discount",
      ];
      let colsProduct = [
        "productName",
        "categoryID",
        "discontinued",
        "productID",
        "quantityPerUnit",
        "unitsInStock",
      ];
      if (this.listDataSet == "orders") {
        return colsOrder;
      } else {
        return colsProduct;
      }
    },
    pagedTableData() {
      return this.listData.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
  },
  methods: {
    setPage(val) {
      this.page = val;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
