import React,{ useEffect, useState } from "react";
import Paper from '@material-ui/core/Paper';
import { ArgumentAxis, ValueAxis, Chart, BarSeries} from '@devexpress/dx-react-chart-material-ui';
import GhostContentAPI from '@tryghost/content-api'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

    title: {
      fontSize: 14,
    },

});

const ChartCmp = () => {

    const classes = useStyles();

    const [dataChart, setDataChart] = useState([])

    useEffect(()=>{
        fetchGraphData()
    },[])

    const fetchGraphData = () => {
        const api = new GhostContentAPI({
            host: process.env.React_App_Host_Name,
            key: process.env.React_App_Key,
            version: process.env.React_App_Version
        });
        
        api.posts.browse({
            limit: 'all'
            })
        .then((posts) => {
            graphValues(posts)
        })
        .catch((err) => {
            console.error(err);
        });
    }

    const graphValues = (posts) => {
        if(posts && posts.length>0){
            let jul20 = [], aug20=[], sep20=[], oct20=[], nov20=[],dec20=[], jan21=[], feb21=[], mar21=[], apr21=[], may21=[], jun21=[], jul21=[], aug21=[], sep21=[]
            posts.map(post=>{
                if(moment(post.published_at).format('MM/YYYY') === '07/2020'){
                    console.log(moment(post.published_at).format('MM/YYYY'))
                    jul20.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '08/2020'){
                    aug20.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '09/2020'){
                    sep20.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '10/2020'){
                    oct20.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '11/2020'){
                    nov20.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '12/2020'){
                    dec20.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '01/2021'){
                    jan21.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '02/2021'){
                    feb21.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '03/2021'){
                    mar21.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '04/2021'){
                    apr21.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '05/2021'){
                    may21.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '06/2021'){
                    jun21.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '07/2021'){
                    jul21.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '08/2021'){
                    aug21.push(post)
                }
                if(moment(post.published_at).format('MM/YYYY') === '09/2021'){
                    sep21.push(post)
                }
            })
        let chartDataArray = [
            { argument: 'Jul 20', value: jul20.length },
            { argument: 'Aug 20', value: aug20.length },
            { argument: 'Sep 20', value: sep20.length },
            { argument: 'Oct 20', value: oct20.length },
            { argument: 'Nov 20', value: nov20.length },
            { argument: 'Dec 20', value: dec20.length },
            { argument: 'Jan 21', value: jan21.length },
            { argument: 'Feb 21', value: feb21.length },
            { argument: 'Mar 21', value: mar21.length },
            { argument: 'Apr 21', value: apr21.length },
            { argument: 'May 21', value: may21.length },
            { argument: 'Jun 21', value: jun21.length },
            { argument: 'Jul 21', value: jul21.length },
            { argument: 'Aug 21', value: aug21.length },
            { argument: 'Sep 21', value: sep21.length },
        ]
        setDataChart(chartDataArray)

        }
    }

    return (

        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
            <Paper style={{width: '80%', padding: 20}}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                        POST PER MONTH
                </Typography>
                <Chart
                    data={dataChart}
                >
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries valueField="value" argumentField="argument" />
                </Chart>
            </Paper>
        </div>

    );
}

export default ChartCmp;
