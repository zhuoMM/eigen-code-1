function ugh_we_gaan_lekker_naar_links () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, binnenWiel)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, buitenWiel)
}
function ugh_we_gaan_lekker_naar_voren () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, vooruit)
}
function ugh_ik_kom_tegen_jou_aan () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, binnenWiel)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, binnenWiel)
}
function ugh_mijn_rechter_teen () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, buitenWiel)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, binnenWiel)
}
function ugh_ik_mijn_linker_teen () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, binnenWiel)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, buitenWiel)
}
function ugh_we_gaan_lekker_naar_rechts () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, buitenWiel)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, binnenWiel)
}
let buitenWiel = 0
let binnenWiel = 0
let vooruit = 0
vooruit = 50
binnenWiel = 30
buitenWiel = 160
basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 0))))) {
        ugh_we_gaan_lekker_naar_voren()
        basic.pause(100)
    } else if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 0))))) {
        ugh_we_gaan_lekker_naar_links()
        basic.pause(100)
    } else if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 0))))) {
        ugh_we_gaan_lekker_naar_rechts()
        basic.pause(100)
    } else if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 0))))) {
        ugh_ik_kom_tegen_jou_aan()
        basic.pause(100)
    } else if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 0))))) {
        ugh_ik_mijn_linker_teen()
        basic.pause(100)
    } else if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 1))))) {
        ugh_mijn_rechter_teen()
        basic.pause(100)
    } else if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 0))))) {
    	
    } else {
    	
    }
})
