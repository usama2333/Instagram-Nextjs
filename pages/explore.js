import Image from 'next/image'
import React, { useState } from 'react'

const Explore = () => {

    let data = [ 
        {
        "id": "CFi7_hCXecU",
        "created_at": "2015-11-30T18:04:43Z",
        "updated_at": "2022-12-04T00:00:59Z",
        "promoted_at": "2015-11-30T18:04:43Z",
        "width": 5587,
        "height": 3725,
        "color": "#d9d9d9",
        "blur_hash": "LjGu|4t7IUR*_Nj[WXoL-=axRij[",
        "description": null,
        "alt_description": "St. Paul's Cathedral",
        "urls": {
            "raw": "https://images.unsplash.com/photo-1448906654166-444d494666b3?ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwxfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1448906654166-444d494666b3?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwxfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3&ixlib=rb-4.0.3&q=80",
            "regular": "https://images.unsplash.com/photo-1448906654166-444d494666b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwxfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1448906654166-444d494666b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwxfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1448906654166-444d494666b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwxfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1448906654166-444d494666b3"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/CFi7_hCXecU",
            "html": "https://unsplash.com/photos/CFi7_hCXecU",
            "download": "https://unsplash.com/photos/CFi7_hCXecU/download?ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwxfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3",
            "download_location": "https://api.unsplash.com/photos/CFi7_hCXecU/download?ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwxfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3"
        },
        "likes": 2175,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {
            "nature": {
                "status": "approved",
                "approved_on": "2020-04-15T15:56:37Z"
            },
            "street-photography": {
                "status": "approved",
                "approved_on": "2021-06-11T13:29:07Z"
            }
        },
        "user": {
            "id": "wdFc4ZqCkWo",
            "updated_at": "2022-12-03T20:38:41Z",
            "username": "anthonydelanoix",
            "name": "Anthony DELANOIX",
            "first_name": "Anthony",
            "last_name": "DELANOIX",
            "twitter_username": "anthonydelanoix",
            "portfolio_url": "http://instagram.com/amour.etc",
            "bio": "It started as a passion, now taking professional pictures of wonderful people for www.amouretc.com, as a wedding and love photographer.",
            "location": "Paris",
            "links": {
                "self": "https://api.unsplash.com/users/anthonydelanoix",
                "html": "https://unsplash.com/@anthonydelanoix",
                "photos": "https://api.unsplash.com/users/anthonydelanoix/photos",
                "likes": "https://api.unsplash.com/users/anthonydelanoix/likes",
                "portfolio": "https://api.unsplash.com/users/anthonydelanoix/portfolio",
                "following": "https://api.unsplash.com/users/anthonydelanoix/following",
                "followers": "https://api.unsplash.com/users/anthonydelanoix/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1619607886061-9792767a7be1image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                "medium": "https://images.unsplash.com/profile-1619607886061-9792767a7be1image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                "large": "https://images.unsplash.com/profile-1619607886061-9792767a7be1image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "amour.etc",
            "total_collections": 0,
            "total_likes": 8,
            "total_photos": 168,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
                "instagram_username": "amour.etc",
                "portfolio_url": "http://instagram.com/amour.etc",
                "twitter_username": "anthonydelanoix",
                "paypal_email": null
            }
        },
        "tags": [
            {
                "type": "search",
                "title": "london"
            },
            {
                "type": "landing_page",
                "title": "city",
                "source": {
                    "ancestry": {
                        "type": {
                            "slug": "wallpapers",
                            "pretty_slug": "HD Wallpapers"
                        },
                        "category": {
                            "slug": "travel",
                            "pretty_slug": "Travel"
                        },
                        "subcategory": {
                            "slug": "city",
                            "pretty_slug": "City"
                        }
                    },
                    "title": "Hd city wallpapers",
                    "subtitle": "Download free city wallpapers",
                    "description": "Choose from a curated selection of city wallpapers for your mobile and desktop screens. Always free on Unsplash.",
                    "meta_title": "City Wallpapers: Free HD Download [500+ HQ] | Unsplash",
                    "meta_description": "Choose from hundreds of free city wallpapers. Download HD wallpapers for free on Unsplash.",
                    "cover_photo": {
                        "id": "Nyvq2juw4_o",
                        "created_at": "2016-11-01T00:26:28Z",
                        "updated_at": "2022-11-16T15:39:19Z",
                        "promoted_at": "2016-11-01T00:26:28Z",
                        "width": 3465,
                        "height": 2131,
                        "color": "#0c2640",
                        "blur_hash": "LhEMa,W=WVWW_4kBjtW=?bkBaefR",
                        "description": "City architecture and skyscrapers near waterfront",
                        "alt_description": "white and brown city buildings during daytime",
                        "urls": {
                            "raw": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3",
                            "full": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                            "regular": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                            "small": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                            "thumb": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477959858617-67f85cf4f1df"
                        },
                        "links": {
                            "self": "https://api.unsplash.com/photos/Nyvq2juw4_o",
                            "html": "https://unsplash.com/photos/Nyvq2juw4_o",
                            "download": "https://unsplash.com/photos/Nyvq2juw4_o/download",
                            "download_location": "https://api.unsplash.com/photos/Nyvq2juw4_o/download"
                        },
                        "likes": 3212,
                        "liked_by_user": false,
                        "current_user_collections": [],
                        "sponsorship": null,
                        "topic_submissions": {},
                        "premium": false,
                        "user": {
                            "id": "1--L3vNK0TA",
                            "updated_at": "2022-11-10T12:52:03Z",
                            "username": "peterlaster",
                            "name": "Pedro Lastra",
                            "first_name": "Pedro",
                            "last_name": "Lastra",
                            "twitter_username": null,
                            "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                            "bio": null,
                            "location": null,
                            "links": {
                                "self": "https://api.unsplash.com/users/peterlaster",
                                "html": "https://unsplash.com/@peterlaster",
                                "photos": "https://api.unsplash.com/users/peterlaster/photos",
                                "likes": "https://api.unsplash.com/users/peterlaster/likes",
                                "portfolio": "https://api.unsplash.com/users/peterlaster/portfolio",
                                "following": "https://api.unsplash.com/users/peterlaster/following",
                                "followers": "https://api.unsplash.com/users/peterlaster/followers"
                            },
                            "profile_image": {
                                "small": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                "medium": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                "large": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                            },
                            "instagram_username": null,
                            "total_collections": 10,
                            "total_likes": 46,
                            "total_photos": 86,
                            "accepted_tos": false,
                            "for_hire": false,
                            "social": {
                                "instagram_username": null,
                                "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                "twitter_username": null,
                                "paypal_email": null
                            }
                        }
                    }
                }
            }
        ]
        },
        {
        "id": "Oja2ty_9ZLM",
        "created_at": "2017-12-18T22:17:34Z",
        "updated_at": "2022-12-04T17:02:32Z",
        "promoted_at": "2017-12-19T11:55:15Z",
        "width": 4896,
        "height": 3264,
        "color": "#d9d9d9",
        "blur_hash": "LqG+E*oJaeof~WoLfkj?-:bIWBax",
        "description": "Winding through London",
        "alt_description": "aerial photography of London skyline during daytime",
        "urls": {
            "raw": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwyfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwyfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3&ixlib=rb-4.0.3&q=80",
            "regular": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwyfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwyfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwyfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1513635269975-59663e0ac1ad"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/Oja2ty_9ZLM",
            "html": "https://unsplash.com/photos/Oja2ty_9ZLM",
            "download": "https://unsplash.com/photos/Oja2ty_9ZLM/download?ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwyfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3",
            "download_location": "https://api.unsplash.com/photos/Oja2ty_9ZLM/download?ixid=MnwzODY2MjZ8MHwxfHNlYXJjaHwyfHxsb25kb24lM0Z8ZW58MHx8fHwxNjcwMTgwNzM3"
        },
        "likes": 1417,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
            "id": "poAmO7xk0ZM",
            "updated_at": "2022-12-03T23:11:20Z",
            "username": "bendavisual",
            "name": "Benjamin Davies",
            "first_name": "Benjamin",
            "last_name": "Davies",
            "twitter_username": "daviesben33",
            "portfolio_url": "http://benjamindavies.co/",
            "bio": "A Product Designer with an eye for photography. Please go check out my website for more photos!",
            "location": "Brighton",
            "links": {
                "self": "https://api.unsplash.com/users/bendavisual",
                "html": "https://unsplash.com/@bendavisual",
                "photos": "https://api.unsplash.com/users/bendavisual/photos",
                "likes": "https://api.unsplash.com/users/bendavisual/likes",
                "portfolio": "https://api.unsplash.com/users/bendavisual/portfolio",
                "following": "https://api.unsplash.com/users/bendavisual/following",
                "followers": "https://api.unsplash.com/users/bendavisual/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1525018026535-581938eb5586?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                "medium": "https://images.unsplash.com/profile-1525018026535-581938eb5586?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                "large": "https://images.unsplash.com/profile-1525018026535-581938eb5586?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "bendavisual",
            "total_collections": 3,
            "total_likes": 200,
            "total_photos": 24,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
                "instagram_username": "bendavisual",
                "portfolio_url": "http://benjamindavies.co/",
                "twitter_username": "daviesben33",
                "paypal_email": null
            }
        },
        "tags": [
            {
                "type": "search",
                "title": "london"
            }
        ]
        }
    ]

    const [datacomplete, setDatacomplete] = useState(data)

    
  return (
    <div>asas
        {
            datacomplete.map((item, ind)=>{
                // console.log("date of updation", item.updated_at);
                // console.log("image url", item.urls.small);
                // console.log("likes", item.likes);
                // console.log("insta user name", item.user.instagram_username);
                console.log("tags", item.tags);
                return(
                    <div key={ind}>
                        <ul>
                        <li>{item?.updated_at}</li>
                          <li><img src={item.urls.small} alt="insta-clone"/></li>
                         <li>{item?.likes}</li>
                         <li>{item.user?.instagram_username}</li>
                         {/* <li>${item?.tags}</li> */}
                         </ul>
                     </div>
                )
                  
                
            })
        }

    </div>
  )
}

export default Explore