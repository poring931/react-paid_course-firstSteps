import React, { useEffect } from 'react'

const Effect = () => {

    //what effect did
    useEffect(() => {}, [])

    useEffect(function initPlugin(){
        somePlugin.init();

        return () => {someplugin.destrouy()}
    },[])

    return (
        <div>
            
        </div>
    )
}

export default Effect
