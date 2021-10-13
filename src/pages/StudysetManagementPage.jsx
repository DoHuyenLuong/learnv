import '../assets/styles/StudysetManagementPage.css'
import { Footer, SearchBox, CardStudySet } from '../components'
import { useState } from "react"
import { Utils } from '../utils'
import { useList } from 'react-firebase-hooks/database'
import { userDB, studySetDB } from '../config/firebase'

const StudysetManagementPage = (props) => {
    const [search, setSearch] = useState('')

    const [userDataSnapshot ] = useList(userDB)
    const [studySetDataSnapshot ] = useList(studySetDB)

    const users = Utils.convertDataSnapshotToArray(userDataSnapshot)

    const studysetList = Utils
        .convertDataSnapshotToArray(studySetDataSnapshot)
        .map(item => Utils.filterStudySet(users, item))
        .reduce((acc, item) => { item.forEach(i => acc.push(i)); return acc }, [])

    const studysets = search
        ? studysetList.filter(item =>
            item.title.trim().toLowerCase().includes(search.trim().toLowerCase())
            || item.description.trim().toLowerCase().includes(search.trim().toLowerCase())
            || ('' + item.wordCarts.length).trim().toLowerCase().includes(search.trim().toLowerCase())
        )
        : studysetList

    return <>
        <div className="StudysetManagementPage-container">

            {/* Phần các chức năng bên trên */}
            <div className="func">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-sm">
                            <p className="title mb-2 mb-sm-0 d-block d-sm-inline-block">Study set management</p>
                        </div>
                        <div className="col-sm d-sm-flex align-items-end justify-content-end mt-4 mt-md-0">
                            <SearchBox placeholder="Search studyset" value={search} onChange={e => setSearch(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content py-3">
                <div className="container-xl">
                    <div className="row">
                        {
                            studysets?.map((item, index) =>
                                <div className="col-md-6 col-lg-4 mb-3" key={item?.idStudyset}>
                                    <CardStudySet
                                        idAuthor={item.uid}
                                        idStudyset={item.idStudyset}
                                        title={item.title}
                                        description={item.description}
                                        lengthWordCart={item.wordCarts.length}
                                        photoURL={item.photoURL}
                                        displayName={item.given_name}
                                        email={item.email}
                                        showFooter={true}
                                        showHeader={true}
                                    />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default StudysetManagementPage