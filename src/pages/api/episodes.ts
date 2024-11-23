import { Episode } from "@/interfaces/episode";
import { NextApiRequest, NextApiResponse } from "next";

const episodes: Episode[] = 
    [{"title":"Duis aliquam convallis nunc.","id":1,"description":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","duration":162.92},
        {"title":"Cras pellentesque volutpat dui.","id":2,"description":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.","duration":78.7},
        {"title":"Curabitur convallis.","id":3,"description":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","duration":24.72},
        {"title":"Vestibulum sed magna at nunc commodo placerat.","id":4,"description":"In congue. Etiam justo. Etiam pretium iaculis justo.","duration":171.35},
        {"title":"Morbi ut odio.","id":5,"description":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","duration":55.14},
        {"title":"Vestibulum ac est lacinia nisi venenatis tristique.","id":6,"description":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","duration":154.36},
        {"title":"Maecenas pulvinar lobortis est.","id":7,"description":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.","duration":124.36},
        {"title":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.","id":8,"description":"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","duration":172.35},
        {"title":"Sed sagittis.","id":9,"description":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.","duration":13.52},
        {"title":"In sagittis dui vel nisl.","id":10,"description":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","duration":106.37}]


export default function handler(req: NextApiRequest, res:NextApiResponse) {
    if (req.method === 'GET') {
        if (req.query.id) {
            const episodeId = parseInt(req.query.id as string, 10 );
            const episode = episodes.find(ep => ep.id === episodeId);
            if (episode) {
                res.status(200).json(episode);
            }
            else{
                res.status(404).json({ error: `Episode with id ${episode} is not found`})
            }
        }
        else{
            res.status(200).json(episodes);
        }
      
    }
    else if(req.method === 'POST'){
        const newEpisode = req.body;
        episodes.push(newEpisode);
        res.status(201).json(newEpisode);
    }
    else{
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} is not allowed`)
    }
}