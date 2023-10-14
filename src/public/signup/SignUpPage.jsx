import React from 'react'
import { PageAnimation } from '../shared/components/page/PageAnimation'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import bg from './assets/shape-bg.png';
const SignUpPage = () => {
    return (
        <PageAnimation>
            <DefaultWrapper>
                <div className="bg-BlueShade px-4 py-4">
                    <div style={{ 'backgroundImage': "url('" + bg + "')" }} className="min-h-[600px]">


                    </div>

                </div>

            </DefaultWrapper>
        </PageAnimation>
    )
}

export default SignUpPage