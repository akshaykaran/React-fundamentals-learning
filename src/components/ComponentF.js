import React from 'react'
import {UserContext, ChannelContext} from '../App'

export default function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return(
                    <ChannelContext.Consumer>
                        {
                            channel => {
                                return (
                                <div>
                                    User context value {user}, channel context value {channel}
                                </div>
                                )
                            }
                        }
                    </ChannelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

