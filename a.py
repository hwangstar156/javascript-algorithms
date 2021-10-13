humanCnt = 0
worldRecordCnt = 0
weightInfo = ("0", "55", "61", "67", "73", "81", "89", "96", "102", "109", "+109")
WorldRecordInfo = ( "", ("135","166","294"), ("145","174","318"), ("155","188","339"), ("169","198","364"), ("175","207","378"), ("179","216","387"), ("186","231","416"), ("191","231","412"), ("200","241","435"), ("223","265","488"))
print("남자 유도선수 정보를 입력하면 세계기록 정보를 확인할수있습니다.")

while True:
    humanCnt += 1

    while True:     
        print("선수이름:")
        name = input()
        if(name):
            break

    while True:
        weight = float(input())
        if(weight > 0):
            break
    
    while True:
        snatch  = float(input())
        if(snatch > 0):
            break

    while True:
        cleanAndJerk = float(input())
        if(cleanAndJerk > 0):
            break
    
    for i in range(9,-1,-1):
        if(weight > float(weightInfo[i])):
            print(name + "선수의 체급은" + weightInfo[i+1] + "입니다")
            print(weightInfo[i+1] + "급의 남자 유도 세계신기록은 다음과 같습니다.")
            print("인상:" + WorldRecordInfo[i+1][0] + ", 용상:" + WorldRecordInfo[i+1][1] + ", 종합:" + WorldRecordInfo[i+1][2])
            if(snatch > float(WorldRecordInfo[i+1][0])):
                print("!!" + name + "선수는 인상에서 세계신기록을 달성했습니다")
            if(cleanAndJerk > float(WorldRecordInfo[i+1][1])):
                print("!!" + name + "선수는 용상에서 세계신기록을 달성했습니다")
            if(snatch + cleanAndJerk > float(WorldRecordInfo[i+1][2])):
                print("!!" + name + "선수는 종합에서 세계신기록을 달성했습니다")

    while True: 
        print("계속하시겠습니까?(예/아니오)")
        confirmResult = input()
        if(confirmResult == "예" or confirmResult == "아니오"):
            break
    
    if(confirmResult == "아니오"):
        break

print("================================================")
print("총" + humanCnt + "인의 선수기록을 확인했습니다")
print("총" + worldRecordCnt + "인의 선수기록을 확인했습니다")
print("================================================")


