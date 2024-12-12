// eslint-disable-next-line no-unused-vars
import React from 'react'

const New = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">What New I Am Learning</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i className='bx bxl-graphql'></i>

                    <div>
                        <h3 className="skills__name">GraphQL</h3>
                        <span className="skills__level">Learning</span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <i className='bx bxl-css3' ></i>

                    <div>
                        <h3 className="skills__name">Kafka</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

            </div>

            <div className="skills__group">
            <div className="skills__data">
                <i className='bx bxl-graphql'></i>

                    <div>
                        <h3 className="skills__name">Redux</h3>
                        <span className="skills__level">Learning</span>
                    </div>
                </div>
                <div className="skills__data">
                <i className='bx bxl-aws'></i>

                    <div>
                        <h3 className="skills__name">AWS</h3>
                        <span className="skills__level">Learning</span>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default New