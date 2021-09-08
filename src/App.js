import { Admin, fetchUtils, Resource } from 'react-admin'
import { DataService } from './services/service'
import { API_URL } from './utils/config'

import './App.css'

import CategoryCreate from './components/category/CategoryCreate'
import CategoryEdit from './components/category/CategoryEdit'
import CategoryList from './components/category/CategoryList'

import PaperCreate from './components/paper/PaperCreate'
import PaperEdit from './components/paper/PaperEdit'
import PaperList from './components/paper/PaperList'

import OpnameCreate from './components/stock-opname/OpnameCreate'
import OpnameEdit from './components/stock-opname/OpnameEdit'
import OpnameList from './components/stock-opname/OpnameList'
import OpnameShow from './components/stock-opname/OpnameShow'

import ReportList from './components/report/ReportList'
import ReportShow from './components/report/ReportShow'

function App() {
  const dataProvider = DataService(API_URL, fetchUtils.fetchJson)

  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="category"
        list={CategoryList}
        create={CategoryCreate}
        edit={CategoryEdit}
        title="categories"
      />

      <Resource
        name="paper"
        list={PaperList}
        create={PaperCreate}
        edit={PaperEdit}
        title="papers"
      />

      <Resource
        name="opname"
        list={OpnameList}
        show={OpnameShow}
        create={OpnameCreate}
        edit={OpnameEdit}
        title="stock opnames"
      />

      <Resource
        name="report"
        list={ReportList}
        show={ReportShow}
        title="Report Stocks"
      />
    </Admin>
  )
}

export default App
