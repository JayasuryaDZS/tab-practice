import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllReferingProvider } from '../../slices/refering-provider/thunk'
import { handleEditUser } from '../../slices/tabs/reducer'

const ReferingProvider = () => {
    const dispatch: any = useDispatch()
    const { referingProviderData, loading } = useSelector((state: any) => state.ReferingProvider)
    const { tabs } = useSelector((state: any) => state.TabReducer)

    useEffect(() => {
        dispatch(getAllReferingProvider())
    }, [])
    const editBtn = (data: any) => {
        dispatch(handleEditUser(data))
    }
    console.log(tabs, 'checking the tabs array 13 --->')
    return (
        <React.Fragment>
            <h1>ReferingProvider</h1>
            {loading && <h1>Loading .....</h1>}
            <table border={1}>
                <tr>
                    <th>Short Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>NPI</th>
                    <th>Action</th>
                </tr>
                <tbody>
                    { referingProviderData.length > 0 ? (referingProviderData).map((data: any) => (
                        <tr>
                            <td>{data.code}</td>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.npi}</td>
                            <td>
                                <div>
                                    <button onClick={() => editBtn(data)}>edit</button>
                                    <button>delete</button>
                                </div>
                            </td>
                        </tr>
                    )) : null }
                </tbody>

            </table>
        </React.Fragment>
    )
}

export default ReferingProvider;