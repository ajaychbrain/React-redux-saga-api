import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_PRODUCT_DETAILS, FETCH_PRODUCT_SUCCESS} from "./ProductActionTypes"; 
import { productAPiData } from "../Components/api";

function* GetPrductFetch(): any {
  const allProducts: any = yield call(productAPiData);
  console.log(allProducts)
  yield put({ type: FETCH_PRODUCT_SUCCESS, allProducts });
}

function* productSaga() {
  yield takeEvery(FETCH_PRODUCT_DETAILS, GetPrductFetch);
}



export default productSaga;