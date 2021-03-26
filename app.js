

function Hero (props) {
    let componentharm = props.componentharm;
    let up = Math.round((Math.random() * 100) * 10);
    let right = Math.round((Math.random() * 100) * 100 - 1000);
    
    let element = <div>
        <div className="hero" style={{top: `${up}px`, right: `${right}px`}} id="hero">                  
                <button className="harm hero__head"
                onClick={() =>  {
                    componentharm();
                }}></button>
                <button className="harm hero__hand--left"
                onClick={() =>  {
                    componentharm();
                }}></button>
                <button className="harm hero__hand--right"
                onClick={() =>  {
                    componentharm();
                }}></button>
                <button className="harm hero__body"
                onClick={() =>  {
                    componentharm();
                }}></button>
                <button className="harm hero__leg--left"
                onClick={() =>  {
                    componentharm();
                }}></button>
                <button className="harm hero__leg--right"
                onClick={() =>  {
                    componentharm();
                }}></button>
        </div>
    </div>;

    return <div>{element}</div>;
}

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            userName: "", // имя персонажа

            //Параметры персонажа
            strong: 0,//Сила
            dexterity: 0,//Ловкость
            intelligence:0,//Интелект
            charisma: 0,//Харизма

            live: 3,
            evasion: 10,//Уклонение
            energy: 0,//Энергия

            skillAttack: 0,//Скилл атак
            skillStels: 0,//Скилл стелс
            skillBowman: 0,//Скилл Стрельба из лука
            skillStudy: 0,//Скилл Обучаемость
            skillLive: 0,//Скилл Выживание
            skillMedicine: 0,//Скилл Медицина
            skillBullying: 0,//Скилл Запугивание
            skillInsight: 0,//Скилл Проницательность
            skillAppearance: 0,//Скилл Внешний вид
            skillManipulation: 0,//Скилл Манипулирование

        }
        this.componentharm = this.componentharm.bind(this);
    }

    render(){
        return (
            <div style={{width : "1000px"}}>
                <h1>Цель игры: поймать человечка</h1>
                <p >Введите имя персонажа</p>
                    <input type="text" 
                    id="userName" 
                    name="userName" 
                    placeholder="Имя персонажа" 
                    />
                    <button onClick={()=>{
                        this.componentRedactName();
                    }}>Изменить имя персонажа</button>

                <h2>Имя вашего персонаж: {this.state.userName == "" ? "Введите имя персонажа":this.state.userName}</h2>

                <div className="flex">
                   
                    <div>
                        <div>
                        <h2>Базовые параметры персонажа</h2>
                            <ul>
                                <li>
                                    <span>Сила</span>&nbsp;&nbsp;  

                                    <button className="minus"
                                    onClick={()=>{
                                        this.componentMinusStrong();
                                    }}></button>&nbsp;

                                    <span>{this.state.strong}</span>&nbsp;

                                    <button className="plus"
                                    onClick={()=>{
                                        this.componentPlusStrong();
                                    }}></button>&nbsp;
                                </li>

                                <li>
                                    <span>Ловкость</span>   &nbsp;&nbsp;

                                    <button className="minus"
                                    onClick={()=>{
                                        this.componentMinusDexterity();
                                    }}></button> &nbsp;

                                    <span>{this.state.dexterity}</span> &nbsp;

                                    <button className="plus"
                                    onClick={()=>{
                                        this.componentPlusDexterity();
                                    }}></button>&nbsp;
                                </li>

                                <li>
                                    <span>Интелект</span>   &nbsp;&nbsp;

                                    <button className="minus"
                                    onClick={()=>{
                                        this.componentMinusIntelligence();
                                    }}></button> &nbsp;

                                    <span>{this.state.intelligence}</span>&nbsp;

                                    <button className="plus"
                                    onClick={()=>{
                                        this.componentPlusIntelligence();
                                    }}></button>&nbsp;
                                </li>

                                <li>
                                    <span>Харизма</span>   &nbsp;&nbsp;

                                    <button className="minus"
                                    onClick={()=>{
                                        this.componentMinusCharisma();
                                    }}></button> &nbsp;

                                    <span>{this.state.charisma}</span>&nbsp;

                                    <button className="plus"
                                    onClick={()=>{
                                        this.componentPlusCharisma();
                                    }}></button>&nbsp;
                                </li>
                            </ul>   
                        </div>

                        <h2>Дополнительные параметры</h2>
                        <ul>
                            <li>Жизненная сила: {this.state.live}</li>
                            <li>Уклонение: {this.state.evasion}</li>
                            <li>Энергичность: {this.state.energy}</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Скиллы</h2>
                        <ul>
                            <li>
                                &nbsp; Скилл атак: {this.state.skillAttack}&nbsp; 
                                <button className="plus" onClick={()=>{
                                    this.componentSkillAttackPlus();
                                }}></button>
                            </li>

                            <li>
                                
                                &nbsp; Скилл стелс: {this.state.skillStels}&nbsp; 
                                <button className="plus" onClick={()=>{
                                    this.componentSkillStelsPlus();
                                }}></button>
                            </li>

                            <li>
                                &nbsp; Скилл Стрельба из лука: {this.state.skillBowman}&nbsp; 
                                <button className="plus" onClick={()=>{
                                    this.componentSkillBowmanPlus();
                                }}></button>
                            </li>

                            <li>
                                
                                &nbsp; Скилл Обучаемость: {this.state.skillStudy}&nbsp; 
                                <button className="plus" onClick={()=>{
                                    this.componentSkillStudyPlus();
                                }}></button>
                            </li>

                            <li>
                                
                                &nbsp; Скилл Выживание: {this.state.skillLive}&nbsp; 
                                <button className="plus" onClick={()=>{
                                    this.componentSkillLivePlus();
                                }}></button>
                            </li>

                            <li>
                                
                                &nbsp; Скилл Медицина: {this.state.skillMedicine}&nbsp; 
                                <button className="plus" onClick={()=>{
                                    this.componentSkillMedicinePlus();
                                }}></button>
                            </li>

                            <li>
                                
                                &nbsp; Скилл Запугивание: {this.state.skillBullying}&nbsp; 
                                <button className="plus" onClick={()=>{
                                    this.componentSkillBullyingPlus();
                                }}></button>
                            </li>

                            <li>
                                
                                &nbsp; Скилл Проницательность: {this.state.skillInsight}&nbsp; 
                                <button className="plus" onClick={()=>{
                                    this.componentSkillInsightPlus();
                                }}></button>
                            </li>

                            <li>
                                
                                &nbsp; Скилл Внешний вид: {this.state.skillAppearance}&nbsp; 
                                <button className="plus" onClick={()=>{
                                    this.componentSkillAppearancePlus();
                                }}></button>
                            </li>

                            <li>
                                
                                &nbsp; Скилл Манипулирование: {this.state.skillManipulation}&nbsp; 
                                <button className="plus" onClick={()=>{
                                    this.componentSkillManipulationPlus();
                                }}></button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <Hero 
                    componentharm={this.componentharm}
                    />
                </div>
            </div>
        )
    }

    componentharm(){
        
        if(this.state.live > 0) {
            this.setState(state =>({
                live: this.state.live - 1,
            })); 
        } else {
            alert("Game over. Start new game");
            this.setState(state =>({
                live: 3,
            })); 
        }
    };

   
    componentSkillAttackPlus(){

        if(this.state.skillAttack < this.state.strong) {
            this.setState(state => ({
                skillAttack: this.state.skillAttack + 1,
            }));
        }
    }

    componentSkillStelsPlus(){
        if (this.state.skillStels < this.state.dexterity) {
            this.setState(state => ({
                skillStels: this.state.skillStels + 1,
            }));
        }  
    }

    componentSkillBowmanPlus(){
        if (this.state.skillBowman < this.state.dexterity) {
            this.setState(state => ({
                skillBowman: this.state.skillBowman + 1,
            }));
        }  
    }

    componentSkillStudyPlus(){
        if (this.state.skillStudy < this.state.intelligence) {
            this.setState(state => ({
                skillStudy: this.state.skillStudy + 1,
            }));
        }  
    }

    componentSkillLivePlus(){
        if (this.state.skillLive < this.state.intelligence) {
            this.setState(state => ({
                skillLive: this.state.skillLive + 1,
            }));
        }  
    }

    componentSkillMedicinePlus(){
        if (this.state.skillMedicine < this.state.intelligence) {
            this.setState(state => ({
                skillMedicine: this.state.skillMedicine + 1,
            }));
        }  
    }

    componentSkillBullyingPlus(){
        if (this.state.skillBullying < this.state.charisma) {
            this.setState(state => ({
                skillBullying: this.state.skillBullying + 1,
            }));
        }  
    }

    componentSkillInsightPlus(){
        if (this.state.skillInsight < this.state.charisma) {
            this.setState(state => ({
                skillInsight: this.state.skillInsight + 1,
            }));
        }  
    }

    componentSkillAppearancePlus(){
        if (this.state.skillAppearance < this.state.charisma) {
            this.setState(state => ({
                skillAppearance: this.state.skillAppearance + 1,
            }));
        }  
    }

    componentSkillManipulationPlus(){
        if (this.state.skillManipulation < this.state.charisma) {
            this.setState(state => ({
                skillManipulation: this.state.skillManipulation + 1,
            }));
        }  
    }

    
// ------

    componentRedactName() {
        this.setState(state=> ({
            userName: document.getElementById("userName").value
        }));
    }


//---------

    componentPlusStrong(){
        if(this.state.strong < 5 ) {
            this.setState(state => ({
                strong: this.state.strong + 1,
                live: this.state.live + 1,
            }));
        }
        
    }
    
    componentPlusDexterity(){
        if(state.dexterity < 5 ) {
            this.setState(state => ({
                dexterity: this.state.dexterity + 1,
                evasion: this.state.evasion + 1,
                energy: this.state.energy + 1,
            }));
        }
        
    }

    componentPlusIntelligence(){
        if(this.state.intelligence < 5 ) {
            this.setState(state => ({
                intelligence: this.state.intelligence + 1,
                energy: this.state.energy + 1,
            }));
        }
        
    }

    componentPlusCharisma(){
        if(this.state.charisma < 5 ) {
            this.setState(state => ({
                charisma: this.state.charisma + 1,
            }));
        }
        
    }

    componentMinusStrong(){
        if(this.state.strong > 0 ) {
            this.setState(state => ({
                strong: this.state.strong - 1,
                live: this.state.live - 1,
            }));
        }
        
    }

    componentMinusDexterity(){
        if( this.state.dexterity > 0 ) {
            this.setState(state => ({
                dexterity: this.state.dexterity - 1,
                evasion: this.state.evasion - 1,
                energy: this.state.dexterity - 1,
            }));
        }
        
    }

    componentMinusIntelligence(){
        if(this.state.intelligence > 0 ) {
            this.setState(state => ({
                intelligence: this.state.intelligence - 1,
                energy: this.state.dexterity - 1,
            }));
        }
        
    }

    componentMinusCharisma(){
        if(this.state.charisma > 0 ) {
            this.setState(state => ({
                charisma: this.state.charisma - 1,
            }));
        }
        
    }


}


ReactDOM.render(
    <App/>,document.getElementById("root")
);

