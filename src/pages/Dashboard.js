import React from 'react'
import AnalyticsCard from '../components/AnalyticsCard'
import ChartCmp from '../components/Chart'
import LatestPostList from '../components/LatestPostList'

const Dashboard = () => {
    return(
        <>
            <AnalyticsCard />
            <ChartCmp />
            <LatestPostList />
        </>
    )
}

export default Dashboard