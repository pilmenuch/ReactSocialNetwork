import React from "react";
import 'antd/dist/antd.css';
import {Button} from "antd";
import {Input} from "antd";


const AddComment = (props) => {
    return (
        <div className='content'>{props.comment}</div>

    )
};


const News = (props) => {
    let state = props.newsPage;
    let newMessageBody = state.newMessageBody;
    let comments = state.newsComment.map(c => <AddComment comment={c.comment} id={c.id}/>);




    return <div className='content'>
        <div>


            Bloodborne modders are always looking to add something to their favorite game. They already discovered
            possible
            evidence of the missing Vileblood Queen storyline last year, and now the community has found a new boss.
            Meet
            the boss variant of the Loran Cleric.

            The Loran Cleric is already in the game as a grunt enemy in the Loran Chalice Dungeon — Chalice Dungeons
            being a
            somewhat randomly generated, late-game dungeon filled with monsters and rewards. Originally, From
            Software
            intended to use Loran Clerics at various points throughout Bloodborne’s campaign. And this newly
            uncovered
            boss
            variant was originally to be a rare boss at the end of the Loran Chalice Dungeon.

            The Loran Cleric boss is a fireball slinging baddy with several flame attacks. It’s a hunched over
            creature
            that
            looks similar to the Female Beast Patient enemy from Old Yharnam. It’s hooded, with what looks like
            spikes
            coming out of its face. The boss variant looks almost identical to its basic enemy form.

            The boss doesn’t work perfectly in Foxy Hooligans’ recreation. It doesn’t move around the arena, and
            simply
            pivots to look at the Hunter. But it does maintain all of its powerful moves, including a flame wave
            that
            emits
            from its center and looks particularly tough to dodge. In the video above, Foxy Hooligans makes it all
            the
            way
            through the fight with Loran Cleric, despite some serious frame-rate drops during the battle.

            In the description for the video above, Foxy Hooligans on YouTube shouts out the Tomb Prospectors
            modding
            community. Foxy Hooligans used a jailbroken PS4 and DSTools modding tools by katalash to rebuild The
            Loran
            Cleric boss.

            It’s unclear if players will ever have an easy way to play the Loran Cleric boss fight. But if you’re a
            talented
            modder, you may be able to follow in Foxy Hooligans and the Tomb Prospectors footsteps.
        </div>
        <div>____________________________________________</div>
        <div>
            <h3>Add your comments</h3>
        </div>
        <div>{comments}</div>


        <Input rows={4}  size="large" value={newMessageBody} onPressEnter={()=>props.addNewComment()}
               onChange={(e)=>props.updateNewsComment(e.target.value)}/>

        <div className='button'>
            <Button type="primary" onClick={()=>props.addNewComment()}>Add comment</Button>
        </div>
    </div>
        ;
};

export default News;