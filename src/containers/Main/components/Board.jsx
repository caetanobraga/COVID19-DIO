import React, { memo } from 'react'
//import PropTypes from 'prop-types'
import { Grid, Skeleton} from '../../../components'
import Card from './Card'


function Board ({data}){
    const  {cases, todayDeaths, recovered, deaths, todayCases} = data
    console.log(recovered)

    const getValue = (value) => value ? value : 0

    return(
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de casos" color = "#000"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={todayDeaths} label="Óbitos hoje" color = "#5d78ff"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayCases)} label="Casos hoje" color = "#67C8"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label="Total de mortos" color = "#5d78ff"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(recovered)} label="Total de recuperados" color = "#F7BB29"/>
            </Grid>
        </Grid>
    )
}
export default memo(Board);