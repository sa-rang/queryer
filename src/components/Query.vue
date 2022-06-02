<template>
  <div>
    <div class="query-container">
      <div class="q-form">
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="Custom Query">
            <el-switch v-model="form.customQuery"></el-switch>
          </el-form-item>
          <el-form-item label="Data Set">
            <el-select
              v-model="form.dataSet"
              @change="dataSetChange"
              placeholder="Select data-set"
            >
              <el-option label="Orders" value="orders"></el-option>
              <el-option label="Products" value="products"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Predefined Query" v-if="!form.customQuery">
            <el-select
              v-model="form.preDefQuery"
              @change="dataSetChange"
              placeholder="Select predefined query"
            >
              <el-option
                v-for="(each, index) in queryList"
                :label="each.label"
                :value="each.value"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Query" v-if="form.customQuery">
            <el-input type="textarea" v-model="form.query"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit"
              :disabled="!form.dataSet"
              >Go</el-button
            >
            <el-button @click="reset">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="q-info">
        <Info />
      </div>
    </div>
    <Listing :list-data-set="form.dataSet" :list-data="filterdData" />
  </div>
</template>

<script>
import Info from "./Info.vue";
import Listing from "./Listing.vue";
export default {
  name: "Query",
  components: {
    Info,
    Listing,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        dataSet: "",
        customQuery: false,
        query: "",
        preDefQuery: "",
      },
      filterdData: null,
      queryList: [],
      orderQList: [
        { label: "orderID=10248", value: "q1" },
        { label: "price between 20 to 50", value: "q2" },
        { label: "price more than 100", value: "q3" },
      ],
      productQList: [
        { label: "category 5", value: "q1" },
        { label: "stock less than 45", value: "q2" },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");

      //mimic an api call for real time data
      this.axios
        .get(`./assets/${this.form.dataSet}.json`)
        .then((res) => {
          console.log(res.data);

          if (this.form.customQuery) {
            if (this.form.query) {
              let queryEqual = this.form.query.split("=");
              let column = queryEqual[0];
              let qValue = queryEqual[1];

              this.filterdData = res.data.filter((el) => {
                return el[column] == qValue;
              });
            } else {
              this.filterdData = res.data;
            }
          } else {
            if (this.form.preDefQuery) {
              if (this.form.dataSet == "orders") {
                switch (this.form.preDefQuery) {
                  case "q1":
                    this.filterdData = res.data.filter((el) => {
                      return el.orderID == "10248";
                    });
                    break;
                  case "q2":
                    this.filterdData = res.data.filter((el) => {
                      return el.unitPrice >= 30 && el.unitPrice <= 50;
                    });
                    break;
                  case "q3":
                    this.filterdData = res.data.filter((el) => {
                      return el.unitPrice > 100;
                    });
                    break;
                }
              } else {
                switch (this.form.preDefQuery) {
                  case "q1":
                    this.filterdData = res.data.filter((el) => {
                      return el.categoryID == "5";
                    });
                    break;
                  case "q2":
                    this.filterdData = res.data.filter((el) => {
                      return el.unitsInStock < 45;
                    });
                    break;
                }
              }
            } else {
              this.filterdData = res.data;
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    dataSetChange() {
      if (this.form.dataSet == "orders") {
        this.queryList = this.orderQList;
      } else {
        this.queryList = this.productQList;
      }

      this.filterdData = null;
    },
    reset() {
      this.form = {
        dataSet: "",
        customQuery: false,
        query: "",
      };
      this.filterdData = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.query-container {
  display: flex;

  margin-top: 20px;
}
.q-form {
  width: 30%;
}
.q-info {
  width: 70%;
  padding-left: 20px;
  margin-left: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  font-size: 14px;
  color: gray;
}
</style>
